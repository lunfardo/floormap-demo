import Konva from "konva";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Line } from "react-konva";

type LightningProps = {
  height: number;
  width: number;
  interval?: number;
  lightningHeight?: number;
  lightningWidth?: number;
};

const Lightning: React.FC<LightningProps> = ({
  height,
  width,
  interval = 5,
  lightningHeight = 2,
  lightningWidth = 1,
}) => {
  const [step, setStep] = useState(0);
  const edges = height / lightningHeight;
  const limitReached = step === edges;
  const linesRef = useRef<Array<Konva.Line | null>>([]);
  const lightSpeed = 30;
  const pointsByInterval = useMemo(() => {
    return new Array(width / interval).fill(0).map((_, i) => {
      const points: number[] = [];
      const stepLength = Math.floor(height / edges);
      new Array(edges).fill(0).forEach((_, j) => {
        const isOddIndex = j % 2 === 0;
        if (points.length < 2) {
          points.push(
            i * interval - lightningWidth / 2,
            0,
            i * interval + lightningWidth / 2,
            stepLength
          );
          return;
        }
        const prevX: number = points.at(-2) || 0;
        const prevY: number = points.at(-1) || 0;
        points.push(
          prevX,
          prevY,
          prevX + (isOddIndex ? lightningWidth : -lightningWidth),
          prevY + stepLength
        );
      });
      return points;
    });
  }, [height, width, interval, edges, lightningWidth]);

  useEffect(() => {
    if (limitReached) return;
    const tmp = setInterval(() => {
      setStep((step) => step + 1);
    }, lightSpeed);
    return () => {
      clearInterval(tmp);
    };
  }, [limitReached, edges]);

  const startAnimation = useCallback(() => {
    linesRef.current.map(async (lineRef) => {
      lineRef?.to({
        strokeWidth: 1.2,
        stroke: "#abe9cd",
        duration: 2,
        onFinish: () => {
          lineRef?.to({
            stroke: "#3eadcf",
            strokeWidth: 0.5,
            duration: 2,
          });
        },
      });
    });
  }, []);

  useEffect(() => {
    if (!limitReached) return;
    const tmp = setTimeout(() => {
      setStep(0);
      startAnimation();
    }, 10);
    return () => {
      clearTimeout(tmp);
    };
  }, [limitReached, startAnimation]);

  useEffect(() => {
    startAnimation();
  }, [startAnimation]);

  return (
    <>
      {pointsByInterval.map((points, idx) => (
        <Line
          key={idx}
          ref={(el) => (linesRef.current[idx] = el)}
          zIndex={10}
          points={points.slice(0, (step - idx) * 4)}
          stroke="#3eadcf"
          tension={0}
          strokeWidth={0.5}
          bezier={false}
        />
      ))}
    </>
  );
};

export default Lightning;
