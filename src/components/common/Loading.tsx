const Loading = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="w-10 h-10 border-4 border-gray-300 border-t-primaryRed rounded-full animate-spin"></div>
      <span>Loading...</span>
    </div>
  );
};

export default Loading;
