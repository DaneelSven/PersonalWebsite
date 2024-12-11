import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const SpinningCryptoLogos = () => {
  const mountRef = useRef(null);
  const animationFrameId = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    const containerWidth = 400; // Wider to accommodate both logos
    const containerHeight = 200;

    renderer.setSize(containerWidth, containerHeight);
    renderer.setClearColor(0x000000, 0);

    mountRef.current.appendChild(renderer.domElement);

    // Create Ethereum Logo
    const ethereumGroup = new THREE.Group();

    // Create main diamond shape
    const diamondShape = new THREE.Shape();
    diamondShape.moveTo(0, 1.2);
    diamondShape.lineTo(1, 0);
    diamondShape.lineTo(0, -1.2);
    diamondShape.lineTo(-1, 0);
    diamondShape.lineTo(0, 1.2);

    const diamondGeometry = new THREE.ShapeGeometry(diamondShape);
    const material = new THREE.MeshBasicMaterial({
      color: "#ff9902",
      side: THREE.DoubleSide,
    });

    const diamond = new THREE.Mesh(diamondGeometry, material);
    ethereumGroup.add(diamond);

    // Add inner line
    const innerLine = new THREE.Shape();
    innerLine.moveTo(0, 0);
    innerLine.lineTo(1, 0);

    const innerGeometry = new THREE.ShapeGeometry(innerLine);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: "#ffffff",
      side: THREE.DoubleSide,
    });

    const inner = new THREE.Mesh(innerGeometry, innerMaterial);
    inner.position.y = -0.2;
    ethereumGroup.add(inner);

    // Create Bitcoin Logo
    const bitcoinGroup = new THREE.Group();

    // Create Bitcoin symbol
    const btcShape = new THREE.Shape();
    btcShape.moveTo(-0.3, 1);
    btcShape.lineTo(0.3, 1);
    btcShape.bezierCurveTo(0.6, 1, 0.8, 0.7, 0.8, 0.4);
    btcShape.bezierCurveTo(0.8, 0.1, 0.6, -0.1, 0.3, -0.2);
    btcShape.lineTo(-0.3, -0.2);
    btcShape.lineTo(-0.3, -1);
    btcShape.lineTo(0.3, -1);
    btcShape.bezierCurveTo(0.6, -1, 0.8, -0.7, 0.8, -0.4);
    btcShape.bezierCurveTo(0.8, -0.1, 0.6, 0.1, 0.3, 0.2);
    btcShape.lineTo(-0.3, 0.2);
    btcShape.closePath();

    const btcGeometry = new THREE.ShapeGeometry(btcShape);
    const btcMaterial = new THREE.MeshBasicMaterial({
      color: "#ff9902",
      side: THREE.DoubleSide,
    });

    const bitcoin = new THREE.Mesh(btcGeometry, btcMaterial);
    bitcoinGroup.add(bitcoin);

    // Position logos
    ethereumGroup.position.x = -2;
    bitcoinGroup.position.x = 2;

    scene.add(ethereumGroup);
    scene.add(bitcoinGroup);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      // Rotate only around X axis
      ethereumGroup.rotation.x += 0.01;
      bitcoinGroup.rotation.x += 0.01;

      renderer.render(scene, camera);
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = containerWidth / containerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerWidth, containerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      // Cleanup geometries and materials
      [diamondGeometry, innerGeometry, btcGeometry].forEach((geo) =>
        geo.dispose()
      );
      [material, innerMaterial, btcMaterial].forEach((mat) => mat.dispose());
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-8"
      style={{ width: "400px", height: "200px" }}
    />
  );
};

export default SpinningCryptoLogos;
