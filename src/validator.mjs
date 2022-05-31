class DokfileValidator {
  validate(content) {
    const formatError = validateDokfileFormat(content);
    if (formatError) {
      throw new Error(formatError);
    }
  }
}

function validateDokfileFormat(dokFile) {
  try {
    JSON.parse(dokFile);
  } catch (ex) {
    return ".dokfile content must be defined using a valid JSON format";
  }
}

export default DokfileValidator;
