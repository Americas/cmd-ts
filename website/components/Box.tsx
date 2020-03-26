import { Size, sizes } from './options';

export function Box(props: {
  padding?: Size;
  paddingBottom?: Size;
  paddingLeft?: Size;
  paddingRight?: Size;
  flex?: number;
  className?: string;
  children: React.ReactNode | React.ReactNodeArray;
}) {
  const padding = props.padding ? sizes[props.padding] : undefined;
  const paddingBottom = props.paddingBottom
    ? sizes[props.paddingBottom]
    : undefined;
  const paddingLeft = props.paddingLeft ? sizes[props.paddingLeft] : undefined;
  const paddingRight = props.paddingRight
    ? sizes[props.paddingRight]
    : undefined;
  return (
    <div
      className={props.className}
      style={compactObj({
        flex: props.flex,
        paddingRight,
        paddingLeft,
        paddingBottom,
        padding,
      })}
    >
      {props.children}
    </div>
  );
}

function compactObj<T>(obj: T): T {
  const result = {} as T;

  for (const [key, value] of Object.entries(obj)) {
    if (value !== null && value !== undefined) {
      result[key as keyof T] = value;
    }
  }

  return result;
}