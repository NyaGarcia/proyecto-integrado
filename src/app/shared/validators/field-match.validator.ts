import { ValidatorFn } from "@angular/forms";

export function FieldMatchValidator<T>(
  ...controlNames: (keyof T)[]
): ValidatorFn {
  return parent => {
    const controls = controlNames.map(name => parent.get(name as string));

    if (controls.every(({ dirty }) => !dirty)) {
      return null;
    }

    const [{ value: referenceValue }] = controls;

    const hasMatch = controls.every(({ value }) => value === referenceValue);
    const hasMatchError = { hasMatch: true };

    for (const control of controls) {
      const { hasMatch: _, ...otherErrors } = control.errors || hasMatchError;
      const errors = hasMatch
        ? otherErrors
        : { ...control.errors, ...hasMatchError };

      if (!control.dirty) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }

      control.setErrors(Object.keys(errors).length === 0 ? null : errors);
    }

    return hasMatch ? null : hasMatchError;
  };
}
