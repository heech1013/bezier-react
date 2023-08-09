import {
  type Foundation,
  css,
  styled,
} from '~/src/foundation'

import { toLength } from '~/src/utils/styleUtils'

import type ProgressBarProps from './ProgressBar.types'
import {
  ProgressBarSize,
  ProgressBarVariant,
} from './ProgressBar.types'

const PROGRESS_BAR_HEIGHT: Record<ProgressBarSize, number> = {
  [ProgressBarSize.S]: 4,
  [ProgressBarSize.M]: 6,
}

interface GetProgressBarStyleProps {
  foundation?: Foundation
  variant: ProgressBarVariant
}

const getProgressBarActiveGradient = ({
  foundation,
  variant,
}: GetProgressBarStyleProps) => {
  switch (variant) {
    case ProgressBarVariant.Green:
    case ProgressBarVariant.GreenAlt: {
      return css`
        background: linear-gradient(
          90deg,
          ${foundation?.theme?.['bgtxt-green-normal']} 0%,
          ${foundation?.subTheme?.['bgtxt-green-normal']} 100%
        );
      `
    }
    case ProgressBarVariant.Monochrome:
    default: {
      return css`
        background: linear-gradient(
          90deg,
          ${foundation?.theme?.['bg-black-light']} 0%,
          ${foundation?.theme?.['bg-black-dark']} 100%
        );
      `
    }
  }
}

const getProgressBarBackgroundColor = ({
  foundation,
  variant,
}: GetProgressBarStyleProps) => {
  switch (variant) {
    case ProgressBarVariant.GreenAlt: {
      return css`
        background-color: ${foundation?.theme?.['bgtxt-absolute-white-normal']};
      `
    }
    case ProgressBarVariant.Green:
    case ProgressBarVariant.Monochrome:
    default: {
      return css`
        background-color: ${foundation?.theme?.['bg-black-light']};
      `
    }
  }
}

interface StyledProgressBarWrapperProps extends ProgressBarProps {
  size: NonNullable<ProgressBarProps['size']>
  width: NonNullable<ProgressBarProps['width']>
  variant: NonNullable<ProgressBarProps['variant']>
}

export const StyledProgressBarWrapper = styled.div<StyledProgressBarWrapperProps>`
  width: ${({ width }) => toLength(width, '36px')};
  height: ${({ size }) => PROGRESS_BAR_HEIGHT[size]}px;

  ${getProgressBarBackgroundColor}
  ${({ foundation }) => foundation?.rounding?.round3}

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('width')};

  ${({ interpolation }) => interpolation}
`

interface StyledProgressBarActiveProps extends ProgressBarProps {
  variant: NonNullable<ProgressBarProps['variant']>
  value: NonNullable<ProgressBarProps['value']>
}

export const StyledProgressBarActive = styled.div<StyledProgressBarActiveProps>`
  width: ${({ value }) => value * 100}%;
  height: 100%;

  ${getProgressBarActiveGradient}
  ${({ foundation }) => foundation?.rounding?.round3}

  ${({ foundation }) => foundation?.transition?.getTransitionsCSS('width')};

  ${({ interpolation }) => interpolation}
`
