import { ChestGlyph, ChestGlyphSecondary } from './svgs';
import { useIcon, IconProps } from '../../shared-components/icon';

export default (props: IconProps) =>
  useIcon(ChestGlyph, ChestGlyphSecondary, props);
