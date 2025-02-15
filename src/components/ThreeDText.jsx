import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { useEffect, useRef } from "react";
import PropTypes from 'prop-types';

const ThreeDText = ({ text, layerColors, numLayers }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / 2 / window.innerHeight, // Only left half
      0.1,
      100
    );
    camera.position.set(0, 0, 18); // Move camera slightly back

    // Create a renderer with a transparent background
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    mountRef.current.appendChild(renderer.domElement);

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 10;
    controls.maxDistance = 50;
    controls.update();

    // Function to resize the canvas and update camera aspect ratio
    const resizeCanvas = () => {
      if (mountRef.current) {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        renderer.setSize(width, height); // Resize the renderer
        camera.aspect = width / height; // Update camera aspect ratio
        camera.updateProjectionMatrix(); // Update camera projection matrix
      }
    };

    // Initial resize
    resizeCanvas();

    // Resize canvas on window resize
    window.addEventListener("resize", resizeCanvas);

    // Load font and create text
    const loader = new FontLoader();
    loader.load("font/Playfair Display_Regular.json", (font) => {
      let currentZPosition = 0; // Track the z position for each layer

      // Loop through the layers based on numLayers
      for (let i = numLayers - 1; i >= 0; i--) {
        // Smaller depth for the thinner layer and greater for thicker layers
        const layerDepth = 0.5 + i * 0.1; // Starting depth at 1 and increasing it for each layer
        const fontSize = 3 + i * 0.1; // Increase font size by 0.2 for each subsequent layer

        const textGeometry = new TextGeometry(text, {
          font: font,
          size: fontSize, // Adjust font size dynamically
          depth: layerDepth, // Depth for current layer
          curveSegments: 12,
          bevelEnabled: true,
          bevelThickness: 0.1,
          bevelSize: 0.05,
          bevelSegments: 3,
        });

        // Try using MeshBasicMaterial for debugging
        const textMaterial = new THREE.MeshBasicMaterial({
          color: layerColors[i] || '#000000', // Use the color from layerColors array or default to red
        });

        // Create the mesh for this layer
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(-10, -2, currentZPosition); // Set position dynamically based on currentZPosition
        scene.add(textMesh);

        // Update the z position for the next layer
        currentZPosition += layerDepth; // Add current layer's depth to z position for the next layer
      }

      // Add lighting from the left and right corners
      const leftLight = new THREE.DirectionalLight(0xffffff, 1);
      leftLight.position.set(10, 10, 10); // Position the light at the left corner
      scene.add(leftLight);

      const ambientLight = new THREE.AmbientLight(0x404040, 1); // Ambient light for softer illumination
      scene.add(ambientLight);

      // Animation loop
      const animate = () => {
        requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
      };
      animate();
    });

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [text, layerColors, numLayers]);

  return (
    <div ref={mountRef} className="w-full h-full" />
  );
};
ThreeDText.propTypes = {
  text: PropTypes.string.isRequired,
  layerColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  numLayers: PropTypes.number.isRequired,
};

export default ThreeDText;