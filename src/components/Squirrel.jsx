import React, { useEffect, useRef,useLayoutEffect  } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useThree } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

export function Squirrel(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/assets/models/scene.gltf");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[1]].reset().fadeIn(0.5).play();
    return () => {
      actions[names[1]].fadeOut(0.5);
    };
  }, [actions, names]);

  let camera = useThree((state) => state.camera);
  let threejsscene = useThree((state) => state.scene);
console.log(camera,threejsscene)
  useLayoutEffect(() => {
    camera.position.set(0, 2, 25);

    let fov = camera.fov;

    fov = (1400 * 18) / window.innerWidth;
    camera.fov = fov;
    camera.updateProjectionMatrix();

    let mm = gsap.matchMedia();

    mm.add(
      {
        // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
        isDesktop: `(min-width: 48em)`,
        isMobile: `(max-width:48em`,
      },
      (context) => {
        // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
        let { isDesktop, isMobile } = context.conditions;

        let t1 = gsap.timeline({
          scrollTrigger: {
            trigger: "#squirrel-model",
            start: "top+=200 top",
            endTrigger: "#sec3",
            end: "top top",
            scrub: 1,
            // markers: true,
          },
        });

        t1.fromTo(camera.position, { y: 2 }, { y: 0 })
          .to(threejsscene.rotation, { y: 0.8 })
          .to(threejsscene.rotation, { y: 3 })
          .to(threejsscene.rotation, { z: 1.58 }, "key1")
          .to(camera.position, { z: 4 }, "key1")
          .to(threejsscene.rotation, { y: 0, z: 0 }, "key2")
          .to(camera.position, { z: 15, x: isDesktop ? -1 : 0 }, "key2")
          .to(threejsscene.rotation, { z: 3, y: 6.3 }, "key3")
          .to(camera.position, { x: isDesktop ? 0.8 : 0, y: 0 }, "key3");

        if (isMobile) {
          camera.fov = 20;
          camera.updateProjectionMatrix();
        }

        return () => {
          if (t1) t1.kill();
        };
      }
    );
  }, []);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Squirrelfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.05}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" rotation={[-Math.PI / 2, 0, 0]} />
                  <group name="Squirrel" rotation={[-Math.PI / 2, 0, 0]} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials["01_-_Default"]}
                    skeleton={nodes.Object_7.skeleton}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/assets/models/scene.gltf");
