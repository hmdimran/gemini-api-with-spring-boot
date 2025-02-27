import { CircleLoader } from "react-awesome-loaders";
export const BookLoaderComponent = () => {
  return (
      <>
        <div className='container my-4 d-flex justify-content-center align-items-center'>
            <CircleLoader
                meshColor={"#6366F1"}
                lightColor={"#E0E7FF"}
                duration={1.5}
                desktopSize={"90px"}
                mobileSize={"64px"}
            />
        </div>
    </>
  );
};