interface ControlValueAccessor {
  writeValue(value: any): void
  registerOnChange(fn: (value: any) => void): void
  registerOnTouched(fn: () => void): void
  setDisabledState(isDisabled: boolean):void
}
