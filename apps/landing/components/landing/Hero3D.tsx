"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Hero3D = ({ className = "" }: { className?: string }) => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const w = () => mount.clientWidth;
    const h = () => mount.clientHeight;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w(), h());
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(50, w() / h(), 0.1, 200);
    cam.position.set(0, 0, 14);

    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const key = new THREE.DirectionalLight(0x25d366, 1.2);
    key.position.set(5, 6, 4);
    scene.add(key);
    const fill = new THREE.PointLight(0x6cf09e, 1.0, 60);
    fill.position.set(-6, -4, 6);
    scene.add(fill);

    // Starfield
    const starGeom = new THREE.BufferGeometry();
    const N = 1200;
    const positions = new Float32Array(N * 3);
    const colors = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 16 + Math.random() * 30;
      const t = Math.random() * Math.PI * 2;
      const pp = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(pp) * Math.cos(t);
      positions[i * 3 + 1] = r * Math.sin(pp) * Math.sin(t);
      positions[i * 3 + 2] = r * Math.cos(pp);
      const isAccent = Math.random() < 0.18;
      colors[i * 3] = isAccent ? 0.15 : 0.85;
      colors[i * 3 + 1] = isAccent ? 0.83 : 0.88;
      colors[i * 3 + 2] = isAccent ? 0.4 : 0.95;
    }
    starGeom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    starGeom.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const stars = new THREE.Points(
      starGeom,
      new THREE.PointsMaterial({
        size: 0.06,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        sizeAttenuation: true,
      }),
    );
    scene.add(stars);

    // Orbit rings
    const ringGroup = new THREE.Group();
    const ringColors = [0x25d366, 0x6cf09e, 0xffffff];
    [3.2, 4.4, 5.8].forEach((r, i) => {
      const g = new THREE.RingGeometry(r, r + 0.012, 128);
      const m = new THREE.MeshBasicMaterial({
        color: ringColors[i],
        transparent: true,
        opacity: 0.25,
        side: THREE.DoubleSide,
      });
      const ring = new THREE.Mesh(g, m);
      ring.rotation.x = Math.PI / 2 + (i - 1) * 0.25;
      ring.rotation.y = i * 0.4;
      ring.userData.spin = (i % 2 ? -1 : 1) * (0.08 + i * 0.03);
      ringGroup.add(ring);
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.07, 16, 16),
        new THREE.MeshBasicMaterial({ color: ringColors[i] }),
      );
      dot.userData.r = r;
      dot.userData.speed = 0.5 + i * 0.2;
      dot.userData.phase = i * 1.3;
      dot.userData.ring = ring;
      ringGroup.add(dot);
    });
    scene.add(ringGroup);

    // Bubble textures
    const makeBubbleTex = (from: "me" | "them", lines: string[]) => {
      const W = 512;
      const H = 220;
      const c = document.createElement("canvas");
      c.width = W;
      c.height = H;
      const ctx = c.getContext("2d");
      if (!ctx) return null;
      ctx.clearRect(0, 0, W, H);
      const isMe = from === "me";
      const bx = isMe ? 60 : 20;
      const by = 20;
      const bw = W - 80;
      const bh = H - 80;
      ctx.fillStyle = isMe ? "rgba(31,58,42,0.96)" : "rgba(21,25,31,0.96)";
      ctx.strokeStyle = isMe ? "rgba(37,211,102,0.5)" : "rgba(255,255,255,0.15)";
      ctx.lineWidth = 2;
      const rd = 24;
      ctx.beginPath();
      ctx.moveTo(bx + rd, by);
      ctx.arcTo(bx + bw, by, bx + bw, by + bh, rd);
      ctx.arcTo(bx + bw, by + bh, bx, by + bh, isMe ? 8 : rd);
      ctx.arcTo(bx, by + bh, bx, by, isMe ? rd : 8);
      ctx.arcTo(bx, by, bx + bw, by, rd);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = isMe ? "#e9fbf0" : "#e8eaed";
      ctx.font = "600 30px Geist, sans-serif";
      lines.forEach((L, i) => ctx.fillText(L, bx + 26, by + 56 + i * 38));
      ctx.fillStyle = isMe ? "#7cc99a" : "#8b94a3";
      ctx.font = "500 20px Geist Mono, monospace";
      ctx.fillText(isMe ? "10:24 ✓✓" : "10:23", bx + bw - 130, by + bh - 18);
      const tex = new THREE.CanvasTexture(c);
      tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
      tex.needsUpdate = true;
      return tex;
    };

    type BubbleSpec = {
      from: "me" | "them";
      lines: string[];
      r: number;
      ang: number;
      dur: number;
      y: number;
      size: number;
    };

    const bubbles: BubbleSpec[] = [
      { from: "them", lines: ["Booking my", "Creta service?"], r: 8.5, ang: 0, dur: 28, y: 1.0, size: 2.6 },
      { from: "me", lines: ["Confirmed for", "9:30 ✓"], r: 9.5, ang: Math.PI * 0.4, dur: 34, y: -1.5, size: 2.9 },
      { from: "them", lines: ["Send brochure", "please"], r: 8.8, ang: Math.PI * 0.8, dur: 30, y: 2.2, size: 2.5 },
      { from: "me", lines: ["Sent · 3 docs", "attached"], r: 10, ang: Math.PI * 1.2, dur: 38, y: 0.3, size: 3.0 },
      { from: "them", lines: ["EMI paid ✓"], r: 9.2, ang: Math.PI * 1.5, dur: 32, y: -2.0, size: 2.4 },
      { from: "me", lines: ["Renewal in", "14 days"], r: 9.8, ang: Math.PI * 1.8, dur: 36, y: 1.8, size: 2.7 },
    ];
    const bubbleMeshes = bubbles.map((b) => {
      const tex = makeBubbleTex(b.from, b.lines);
      const m = new THREE.Mesh(
        new THREE.PlaneGeometry(b.size, (b.size * 220) / 512),
        new THREE.MeshBasicMaterial({ map: tex ?? undefined, transparent: true, side: THREE.DoubleSide }),
      );
      m.userData = b;
      scene.add(m);
      return m;
    });

    const lineMat = new THREE.LineBasicMaterial({ color: 0x25d366, transparent: true, opacity: 0.2 });
    const lines = bubbleMeshes.map(() => {
      const g = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), new THREE.Vector3()]);
      const l = new THREE.Line(g, lineMat.clone());
      scene.add(l);
      return l;
    });

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("mousemove", onMove);

    let scrollProgress = 0;
    const updateProgress = () => {
      scrollProgress = Math.min(1, Math.max(0, window.scrollY / (window.innerHeight * 1.2)));
    };
    updateProgress();
    const onScrollNew = () => {
      updateProgress();
    };
    window.addEventListener("scroll", onScrollNew, { passive: true });

    const onResize = () => {
      cam.aspect = w() / h();
      cam.updateProjectionMatrix();
      renderer.setSize(w(), h());
    };
    window.addEventListener("resize", onResize);

    let raf = 0;
    const animate = () => {
      mouse.x += (mouse.tx - mouse.x) * 0.04;
      mouse.y += (mouse.ty - mouse.y) * 0.04;

      cam.position.x = mouse.x * 0.6;
      cam.position.y = -mouse.y * 0.4;
      cam.position.z = 14 + scrollProgress * 8;
      cam.lookAt(0, 0, 0);

      stars.rotation.y = scrollProgress * 0.4;
      stars.rotation.x = scrollProgress * 0.2;
      (stars.material as THREE.PointsMaterial).opacity = 0.9 - scrollProgress * 0.5;

      ringGroup.children.forEach((obj) => {
        if (obj instanceof THREE.Mesh && obj.geometry instanceof THREE.RingGeometry) {
          obj.rotation.z = scrollProgress * (obj.userData.spin as number) * 4;
        } else if (obj instanceof THREE.Mesh) {
          const a = scrollProgress * Math.PI * 2 * (obj.userData.speed as number) + (obj.userData.phase as number);
          const r = obj.userData.r as number;
          obj.position.set(Math.cos(a) * r, Math.sin(a * 0.7) * 0.4, Math.sin(a) * r);
          const ring = obj.userData.ring as THREE.Mesh;
          obj.position.applyEuler(ring.rotation);
        }
      });

      bubbleMeshes.forEach((m, i) => {
        const b = m.userData as BubbleSpec;
        const reveal = Math.min(1, Math.max(0, scrollProgress * 6 - i * 0.5));
        const a = b.ang + scrollProgress * Math.PI * 1.2;
        m.position.set(Math.cos(a) * b.r, b.y, Math.sin(a) * b.r);
        m.scale.setScalar(reveal);
        m.lookAt(cam.position);
        const mat = m.material as THREE.MeshBasicMaterial;
        mat.opacity = reveal * (1 - scrollProgress * 0.4);
        mat.transparent = true;
        const arr = (lines[i].geometry.attributes.position as THREE.BufferAttribute).array as Float32Array;
        arr[0] = 0;
        arr[1] = 0;
        arr[2] = 0;
        arr[3] = m.position.x;
        arr[4] = m.position.y;
        arr[5] = m.position.z;
        (lines[i].geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true;
        (lines[i].material as THREE.LineBasicMaterial).opacity = 0.05 + reveal * 0.2;
      });

      renderer.render(scene, cam);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScrollNew);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
      scene.traverse((o) => {
        const anyO = o as THREE.Mesh;
        if (anyO.geometry) anyO.geometry.dispose();
        if (anyO.material) {
          const mats = Array.isArray(anyO.material) ? anyO.material : [anyO.material];
          mats.forEach((m) => {
            const mat = m as THREE.MeshBasicMaterial;
            if (mat.map) mat.map.dispose();
            mat.dispose();
          });
        }
      });
    };
  }, []);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
};
