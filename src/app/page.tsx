import { Card } from "../components";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="max-w-[1400px] w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <Card title="First Blogpost">
            <div className="space-y-4">
              <p className="text-lg">Tags</p>
              <p>
                In diesem Blog geht es um Lorem ipsum dolor sit amet consectetur
                adipiscing elit. Quisque faucibus ex sapien vitae pellentesque
                sem placerat.
              </p>
            </div>
          </Card>
          <Card title="Second Blogpost">
            <div className="space-y-4">
              <p className="text-lg">Tags</p>
              <p>
                In diesem Blog geht es um Lorem ipsum dolor sit amet consectetur
                adipiscing elit. Quisque faucibus ex sapien vitae pellentesque
                sem placerat.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
