import {deleteAsync} from "del"; // clear dist before copy

export const reset = () => {
    return deleteAsync(app.path.clean);
}