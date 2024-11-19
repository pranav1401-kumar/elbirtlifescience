export default function Newsletter() {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Take charge of your health today</h2>
            <p className="text-lg mb-8">
              Sign-up to get news on our latest additions, current health news as well as helpful guides.
            </p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    )
  }