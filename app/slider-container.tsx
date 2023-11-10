type SliderContainerProps = {
  username: string;
}

export default function SliderContainer({ username }: SliderContainerProps) {
  return (
    <div className="flex opening-slider-container items-center justify-center w-screen h-screen">
      <div className="opening-slider-text">
        <div className="text-xl font-bold text-center cursor-default select-none">
          {username}
        </div>
        <div className="text-lg font-medium text-center underline underline-offset-1 cursor-pointer hover:opacity-80">
          begin
        </div>
      </div>
    </div>
  );
}
