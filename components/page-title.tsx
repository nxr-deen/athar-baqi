interface PageTitleProps {
  title: string
  description: string
}

export default function PageTitle({ title, description }: PageTitleProps) {
  return (
    <section className="page-title">
      <div className="container">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  )
}
