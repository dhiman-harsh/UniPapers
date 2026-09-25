import CategoryCard from "./CategoryCard"

const Categories = ({ title, children }) => {
    return (
        <section class="py-8 antialiased md:py-16">
            <div class="mx-auto max-w-screen-xl px-4 2xl:px-0">
                <div class="mb-4 flex items-center justify-between gap-4 md:mb-8">
                    <h2 class="text-xl font-semibold sm:text-2xl">{title}</h2>
                </div>

                <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Categories