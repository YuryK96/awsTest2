/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Note2CreateFormInputValues = {
    title?: string;
    text?: string;
};
export declare type Note2CreateFormValidationValues = {
    title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Note2CreateFormOverridesProps = {
    Note2CreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Note2CreateFormProps = React.PropsWithChildren<{
    overrides?: Note2CreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Note2CreateFormInputValues) => Note2CreateFormInputValues;
    onSuccess?: (fields: Note2CreateFormInputValues) => void;
    onError?: (fields: Note2CreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Note2CreateFormInputValues) => Note2CreateFormInputValues;
    onValidate?: Note2CreateFormValidationValues;
} & React.CSSProperties>;
export default function Note2CreateForm(props: Note2CreateFormProps): React.ReactElement;
