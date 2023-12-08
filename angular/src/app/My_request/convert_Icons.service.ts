// your-component.service.ts
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class YourComponentService {
    private _formStates: { [key: string]: { isEditing: boolean } } = {};

    getFormState(formId: string): { isEditing: boolean } {
        return this._formStates[formId] || { isEditing: false };
    }

    toggleEditing(formId: string): void {
        if (!this._formStates[formId]) {
            this._formStates[formId] = { isEditing: false };
        }

        this._formStates[formId].isEditing = !this._formStates[formId].isEditing;
    }
}
