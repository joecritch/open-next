import type { OpenNextNodeResponse } from "../http/openNextResponse.js";
import type { IncomingMessage } from "../http/request.js";
import type { Options, PluginHandler } from "../types/next-types.js";
//#override imports
import { requestHandler, setNextjsPrebundledReact } from "./util.js";
//#endOverride

//#override handler
export const handler: PluginHandler = async (
  req: IncomingMessage,
  res: OpenNextNodeResponse,
  options: Options,
) => {
  setNextjsPrebundledReact(options.internalEvent.rawPath);
  return requestHandler(req, res);
};
//#endOverride
