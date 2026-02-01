import { ghosts, pacman } from "../../constants";

const InfiniteRow = () => {
  return (
    <div className=" relative overflow-hidden w-full h-auto mb-2 rounded-md">
      <div className="animate-slide flex gap-10 min-w-max">
        <div className="flex gap-10 items-center">
          <img
            src={ghosts[0].vine}
            alt="Ghost"
            className=" w-7 h-7 lg:w-10  lg:h-10"
          />
          <img src={pacman} alt="Pacman" className=" h-10 lg:h-12" />
        </div>
      </div>
    </div>
  );
};

export default InfiniteRow;
