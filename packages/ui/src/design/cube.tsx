import React from 'react'

type ComponentType = React.FC<Props> & {
  All: React.FC
  Variant: typeof Variant
  Position: typeof Position
}

enum Variant {
  Primary = 'primary',
  Secondary = 'secondary',
  Fuchsia = 'fuchsia',
  Teal = 'teal',
}

enum Position {
  Default = 'default',
  TopLeft = 'top-left',
  TopRight = 'top-right',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
  Center = 'center',
}

type Props = {
  variant?: Variant
  position?: Position
  onlyDesktop?: boolean
  fixed?: boolean
}

const VariantClasses: Record<Variant, string> = {
  [Variant.Primary]: 'bg-primary',
  [Variant.Fuchsia]: 'bg-fuchsia-500',
  [Variant.Secondary]: 'bg-secondary',
  [Variant.Teal]: 'bg-teal-500',
}

const PositionClasses: Record<Position, string> = {
  [Position.Default]: 'top-[5%] left-[5%] animate-cube-effect-top-left',
  [Position.TopLeft]: 'top-[5%] left-[5%] animate-cube-effect-top-left',
  [Position.TopRight]: 'top-[5%] right-[5%] animate-cube-effect-top-right',
  [Position.BottomLeft]: 'bottom-[5%] left-[5%] animate-cube-effect-bottom-left',
  [Position.BottomRight]: 'bottom-[5%] right-[5%] animate-cube-effect-bottom-right',
  [Position.Center]: 'top-1/2 left-1/2 animate-cube-effect-center',
}

const CubeEffect: ComponentType = ({
  variant = Variant.Primary,
  position = Position.TopRight,
  onlyDesktop = true,
  fixed = true,
}) => {
  return (
    <div
      className={`h-16 w-16 rounded-md bg-opacity-20 ${VariantClasses[variant]} ${PositionClasses[position]} ${
        onlyDesktop ? 'hidden lg:block' : ''
      } ${fixed ? 'fixed' : 'absolute'}`}
    />
  )
}

const AllEffects: React.FC = () => {
  return (
    <>
      <CubeEffect position={CubeEffect.Position.TopLeft} variant={CubeEffect.Variant.Secondary} />
      <CubeEffect position={CubeEffect.Position.BottomLeft} variant={CubeEffect.Variant.Primary} />
      <CubeEffect position={CubeEffect.Position.TopRight} />
      <CubeEffect position={CubeEffect.Position.BottomRight} variant={CubeEffect.Variant.Secondary} />
    </>
  )
}

CubeEffect.All = AllEffects
CubeEffect.Variant = Variant
CubeEffect.Position = Position

export default CubeEffect
