import Color from 'color'
import { DefaultTheme, MD2Colors as Colors, type MD2Theme as RNPTheme } from 'react-native-paper'

interface ThemeVariables {
  primaryColor: string
  accentColor: string
  backgroundColor: string
  backdrop: string
  baseSize: number
  textColor: string
  secondaryTextColor: string
  lightestTextColor: string
  dividerColor: string
  error: string
  linkColor: string
  successColor: string
  warningColor: string
  mutedWarning: string
  loadingBackgroundColor: string
  highlight: string
}

const defaultVariables: ThemeVariables = {
  primaryColor: Colors.black,
  accentColor: Colors.pink500,
  backgroundColor: Colors.white,
  backdrop: DefaultTheme.colors.backdrop,
  baseSize: 16,
  textColor: DefaultTheme.colors.text,
  secondaryTextColor: Colors.grey600,
  lightestTextColor: Colors.grey400,
  dividerColor: Colors.grey300,
  error: Colors.red500,
  linkColor: Colors.blue600,
  successColor: Colors.green600,
  warningColor: Colors.yellow600,
  mutedWarning: Colors.yellow800,
  // There is nothing close that does not look bad in the Paper Colors.
  loadingBackgroundColor: '#131315',
  highlight: Colors.orange500
}

export class Theme {
  constructor (private readonly variables: ThemeVariables) {
  }

  public spacing = {
    base: this.variables.baseSize,
    unit: (multiplier = 1) => multiplier * this.variables.baseSize
  }

  public size = {
    tiny: 11, // tiny text (e.g. tags etc)
    small: 12, // smaller text to remove focus
    normal: 14, // normal texts
    menu: 16, // title text
    large: 18,
    xlarge: 24,
    xxlarge: 32,
    title: 24, // title size
    roundness: DefaultTheme.roundness
  }

  public fontWeight: Record<string, '300' | '400' | '600' | '800'> = {
    light: '300',
    normal: '400',
    bold: '600',
    extraBold: '800'
  }

  public salesGraphColors = {
    secondaryColor: this.variables.mutedWarning
  }

  public colors = {
    background: this.variables.backgroundColor,
    backdrop: this.variables.backdrop,
    primary: this.variables.primaryColor,
    accent: this.variables.accentColor,
    text: this.variables.textColor,
    secondaryText: this.variables.secondaryTextColor,
    lightestTextColor: this.variables.lightestTextColor,
    invertedTextColor: this.variables.backgroundColor,
    divider: this.variables.dividerColor,
    link: this.variables.linkColor,
    error: this.variables.error,
    success: this.variables.successColor,
    warning: this.variables.warningColor,
    mutedWarning: this.variables.mutedWarning,
    loadingBackgroundColor: this.variables.loadingBackgroundColor,
    highlight: this.variables.highlight,
    lighten: (color: string, amount: number) => Color(color).lighten(amount).hex(),
    darken: (color: string, amount: number) => Color(color).darken(amount).hex(),
    toRGBA: (color: string, opacity: number) => Color(color).fade(opacity).rgb()
  }

  public reactNativePaperTheme: RNPTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: this.variables.backgroundColor,
      primary: this.variables.primaryColor,
      accent: this.variables.accentColor,
      error: this.variables.error
    }
  }

  public boxShadow = {
    borderWidth: 0,
    borderRadius: this.size.roundness,
    shadowColor: this.colors.text,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
}

export const defaultTheme = new Theme(defaultVariables)
