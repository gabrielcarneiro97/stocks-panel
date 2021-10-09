import { Tooltip } from '../../../../..';

type Props = {
  active? : boolean;
  payload? : any;
};

export default function ChartTooltip(
  { active, payload } : Props,
) {
  if (active && payload && payload.length) {
    return (
      <Tooltip chart content={`$${payload[0].value}`} />
    );
  }

  return null;
}

ChartTooltip.defaultProps = {
  active: undefined,
  payload: undefined,
};
