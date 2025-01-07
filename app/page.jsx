import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover and Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          AI - Powered Prompts
        </span>
      </h1>
      <p className="text-center desc">
        Prompts - AI is a platform that provides you with AI-generated prompts
        to help you get started with your writing, drawing, or any other
        creative activity. You can also share your own prompts with the
        community.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
