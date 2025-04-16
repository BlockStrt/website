export function Video() {
    return (
      <video width="100%" height="240" controls preload="none">
        <source src="/hope.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    )
  }