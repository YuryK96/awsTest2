/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Note2 } from "../models";
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
export declare type Note2UpdateFormInputValues = {
    title?: string;
    text?: string;
};
export declare type Note2UpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    text?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Note2UpdateFormOverridesProps = {
    Note2UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Note2UpdateFormProps = React.PropsWithChildren<{
    overrides?: Note2UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    note2?: Note2;
    onSubmit?: (fields: Note2UpdateFormInputValues) => Note2UpdateFormInputValues;
    onSuccess?: (fields: Note2UpdateFormInputValues) => void;
    onError?: (fields: Note2UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Note2UpdateFormInputValues) => Note2UpdateFormInputValues;
    onValidate?: Note2UpdateFormValidationValues;
} & React.CSSProperties>;
export default function Note2UpdateForm(props: Note2UpdateFormProps): React.ReactElement;
