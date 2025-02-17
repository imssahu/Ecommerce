import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import * as THREE from "three";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ThreeDObject = ({ modelPath }) => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f0f0);

    // Camera setup – temporary position; will be updated after model load
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 10);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Orbit Controls with simplified settings
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = false; // Disable damping for immediate response
    controls.enableZoom = false;     // Disable zoom so the camera stays at the desired distance
    controls.enablePan = false;      // Disable panning
    controls.rotateSpeed = 0.5;      // Adjust rotation speed if needed

    // Load STL Model
    const loader = new STLLoader();
    loader.load(modelPath, (geometry) => {
      const material = new THREE.MeshStandardMaterial({
        color: 0xff5733,
        metalness: 0.5,
        roughness: 0.5,
      });
      const mesh = new THREE.Mesh(geometry, material);

      // Center the model
      geometry.computeBoundingBox();
      const center = new THREE.Vector3();
      geometry.boundingBox.getCenter(center);
      mesh.position.sub(center);

      // Compute bounding sphere to adjust camera distance
      geometry.computeBoundingSphere();
      const sphere = geometry.boundingSphere;
      const distance = sphere.radius * 2.5; // Increase factor for more zoom out

      // Reposition the camera so the entire model is in view
      camera.position.set(center.x, center.y, center.z + distance);
      camera.lookAt(center);
      controls.target.copy(center);

      scene.add(mesh);
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [modelPath]);

  return <div ref={mountRef} style={{ width: "100%", height: "500px" }} />;
};

ThreeDObject.propTypes = {
  modelPath: PropTypes.string.isRequired,
};

export default ThreeDObject;
