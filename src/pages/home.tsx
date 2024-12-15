import { createSignal } from "solid-js";

export default function Home() {
  const [email, setEmail] = createSignal("");
  const [message, setMessage] = createSignal("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email().trim()) {
      setMessage("Please enter a valid email address.");
      return;
    }
    
    // Simulate form submission (replace with an API or Netlify form endpoint)
    try {
      setMessage("Submitting...");
      // Add form submission logic here (e.g., send to a server or use Netlify Forms)
      setTimeout(() => {
        setMessage("Thank you for signing up! We'll be in touch soon.");
      }, 1000);
    } catch (error) {
      setMessage("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <section class="bg-slate-200 text-slate-700 p-8 rounded-md max-w-md mx-auto">
      <h1 class="text-3xl font-bold text-center mb-6">Slipping Rib Portal</h1>
      <p class="mb-4 text-center">
        Be the first to access the Slipping Rib Portal. Sign up for early access now!
      </p>

      <form onSubmit={handleSubmit} class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email()}
            onInput={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-slate-900 text-white py-2 rounded-md hover:bg-slate-700"
        >
          Sign Up
        </button>
      </form>

      {message() && (
        <p class="mt-4 text-center text-slate-800">{message()}</p>
      )}
    </section>
  );
}
