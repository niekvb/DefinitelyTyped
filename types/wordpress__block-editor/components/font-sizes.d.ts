import { FontSizePicker as FSP } from '@wordpress/components';
import { ComponentType } from 'react';

import { EditorFontSize } from '../';

export namespace FontSizePicker {
    type Props = Omit<FSP.Props, 'disableCustomFontSizes' | 'fontSizes'>;
}
export const FontSizePicker: ComponentType<FontSizePicker.Props>;

/**
 * Returns the font size object based on an array of named font sizes and the `namedFontSize` and
 * `customFontSize` values. If `namedFontSize` is `undefined` or not found in `fontSizes` an object with
 * just the size value based on `customFontSize` is returned.
 *
 * @remarks
 * If `fontSizeAttribute` is set and an equal slug is found in `fontSizes` it returns the font
 * size object for that slug. Otherwise, an object with just the `size` value based on `customFontSize`
 * is returned.
 *
 * @param fontSizes - Array of font size objects containing at least the "name" and "size" values as properties.
 * @param fontSizeAttribute - Content of the font size attribute (slug).
 * @param customFontSizeAttribute - Contents of the custom font size attribute (value).
 */
export function getFontSize(
    fontSizes: EditorFontSize[],
    fontSizeAttribute: string | undefined,
    customFontSizeAttribute: number
): Partial<EditorFontSize> & Pick<EditorFontSize, 'size'>;

/**
 * Returns a class based on fontSizeName.
 *
 * @remarks
 * Value returned is generated by appending 'has-' followed by fontSizeSlug in kebab-case and ending
 * with '-font-size'.
 *
 * @param fontSizeSlug - Slug of the fontSize.
 */
export function getFontSizeClass(fontSizeSlug: string): string;

/**
 * Higher-order component, which handles font size logic for class generation,
 * font size value retrieval, and font size change handling.
 *
 * @remarks
 * NOTE: this function is poorly designed and is thereby not able to have strong types associated.
 *
 * @param attributeNames - 1 or more font size attributes
 */
export function withFontSizes(...attributeNames: string[]): (component: ComponentType<any>) => ComponentType<any>;
