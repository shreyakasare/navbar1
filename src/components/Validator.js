import i18next from "i18next";
import { popUp } from "./PopUp";
import { errorMessagesList } from "../util/Helper";

export class Validator {
    debugger
    constructor() {
        this.controls = [];
        this.requiredMessage = true;
        this.setFocus = true
    }

    add(control) {
        if (control.current && control.current.validate) {
            this.controls.push(control);
            if (this.setFocus) {
                control.current.focus();
                this.setFocus = false;
            }
        }
        // else {
        //   throw "Invalid control added for validation"
        // }
    }

    validate() {
        const results = [];
        let setFocus = true;
        for (const control of this.controls) {
            const result = control.current.validate();
            if (!result.isValid) {
                results.push({ field: control.current.label, errorCode: result.errorCode });
                if (setFocus) {
                    setFocus = false;
                    if (this.requiredMessage) {
                        this.requiredMessage = false;
                        popUp({ message: errorMessagesList.requiredFields, icons: "error" }).then((event) => {
                            if (event.isConfirmed) {
                                control.current.focus();
                            }
                        });
                    } else {
                        if (typeof (result.errorCode) === "object") {
                            popUp({ message: i18next.t(result.errorCode.code, { ...result.errorCode.parameter }) + ` -"${control.current.label}"`, icons: "error" }).then((event) => {
                                if (event.isConfirmed) {
                                    control.current.focus();
                                }
                            })
                        } else {
                            popUp({ message: i18next.t(result.errorCode) + ` -"${control.current.label}"`, icons: "error" }).then((event) => {
                                if (event.isConfirmed) {
                                    control.current.focus();
                                }
                            })
                        }

                    }
                }
            }
        }
        return results;
    }

    clearValidation() {
        let setFocus = true;
        for (const control of this.controls) {
            try {
                control.current.clear();
                if (setFocus) {
                    control.current.focus();
                    setFocus = false;
                }
            }
            catch (error) {
                console.log("trycatch", error, control)
            }
        }
    }

    clearControlls() {
        this.controls = [];
    }

}
