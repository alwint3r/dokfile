class DokfileParser {
  parse(dokFileContent, targetTag) {
    const parsed = JSON.parse(dokFileContent);

    const build = {
      baseImage: parsed["image-name"],
      baseTag: targetTag,
      additionalBaseTags: ["latest"],
      remoteImageName: "",
      remoteTags: [],
      buildArgs: [],
      dockerFileName: 'Dockerfile',
    };

    if (parsed["remote-url"]) {
      build.remoteImageName = `${parsed["remote-url"]}/${build.baseImage}`;
      build.remoteTags = [build.baseTag, "latest"];
    }

    if (parsed.build && parsed.build.args) {
      build.buildArgs = [];

      const argsPair = Object.entries(parsed.build.args);
      for (const [arg, value] of argsPair) {
        build.buildArgs.push({ arg, value });
      }
    }

    if (parsed.dockerfile) {
      build.dockerFileName = parsed.dockerfile;
    }

    return build;
  }
}

export default DokfileParser;
