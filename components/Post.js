import Image from 'next/image'

function Post({ date, image, title }) {
  let { file, description } = image

  return (
    <div className="post">
      <Image
        src={`https:${file.url}`}
        width={500}
        height={500}
        alt={description}
      />
      <div className="description">{description}</div>
      <div className="text">
        <h2>{title}</h2>
        <h3>{date.substring(0, 10)}</h3>
      </div>
    </div>
  )
}

export default Post