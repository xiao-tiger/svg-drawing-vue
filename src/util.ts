/**
 * 生成随机码
 * @param len 随机码长度
 */
export function createRandomCode(len = 11): string {
  const charset = `_0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
  const maxLen = charset.length;
  let ret = "";
  for (let i = 0; i < len; i++) {
    const randomIndex = Math.floor(Math.random() * maxLen);
    ret += charset[randomIndex];
  }
  return ret;
}

export type editorName = "pencil" | "marker" | "inkpen" | "eraser" | "chalk";

export function getEditorName(value: editorName): string {
  const component = {
    pencil: "create-path",
    marker: "create-path",
    inkpen: "create-path",
    eraser: "eraser-path",
    chalk: "create-path",
  };

  return component[value];
}

// 目前这个 demo 级别的项目够用了
export function deepcopy<T>(obj: T): T {
  if (typeof obj === "object" && obj !== null) {
    return JSON.parse(JSON.stringify(obj));
  }
  return obj;
}
