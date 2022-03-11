type Resource = TextureResource | CubeTextureResource | ModelResource;

type TextureResource = {
  name: string;
  type: "texture";
  path: string;
};

type CubeTextureResource = {
  name: string;
  type: "cubeTexture";
  path: string[];
};

type ModelResource = {
  name: string;
  type: "gltfModel";
  path: string;
};

type LoadedResource = LoadedTexture | LoadedCubeTexture | LoadedModel;

type LoadedTexture = THREE.Texture;

type LoadedModel = import("three/examples/jsm/loaders/GLTFLoader").GLTF;

type LoadedCubeTexture = THREE.CubeTexture;

type ResourceType = "texture" | "cubeTexture" | "gltfModel";
