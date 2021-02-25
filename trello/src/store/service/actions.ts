import { ActionService, ACTION_TYPES, RequestPayload } from "./types";

export const request = (p: RequestPayload): ActionService => ({
    type: ACTION_TYPES.REQUEST,
    ...p
  });