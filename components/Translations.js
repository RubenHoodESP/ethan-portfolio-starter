import Link from "next/link";

const Translations = () => {
  return (
    <div className='flex items-center justify-center gap-x-5 text-xl'>
        <Link href="/es" locale="es">
            <span className="fi fi-es"></span>
        </Link>
        <Link href="/en" locale="en">
            <span className="fi fi-gb"></span>
        </Link>
    </div>
  )
}

export default Translations