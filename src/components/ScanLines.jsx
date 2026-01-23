// Scan lines overlay for CRT monitor effect
const ScanLines = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `repeating-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.15) 0px,
          rgba(0, 0, 0, 0.15) 1px,
          transparent 1px,
          transparent 2px
        )`,
        pointerEvents: 'none',
        zIndex: 9998,
        opacity: 0.5
      }}
    />
  );
};

export default ScanLines;
