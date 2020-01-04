import { SET_STATUS, AuthAction } from "../types/types"
import { AsyncActionStatus } from "../types/models"

export const Status = (status: AsyncActionStatus): AuthAction => {
  return {
    type: SET_STATUS,
    status
  }
}