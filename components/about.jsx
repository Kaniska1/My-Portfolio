import { Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-2 border-text overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="../profile.jpg"
                  alt="My Image"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              I am <br />
              <span className="text-5xl bg-gradient-to-r from-[#e60000] to-[#ffae00] bg-clip-text text-transparent md:text-6xl">
                Kaniska Mitra
              </span>
            </h1>

            <p className="mb-6 text-lg">
              I am an undergrad Computer Science student. Aspiring software
              engineer with a passion for problem-solving and a strong
              foundation in data structures and algorithms. I have a keen
              interest in web development, machine learning, and competitive
              programming.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <Link href="../resume.pdf" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="border-text text-text hover:text-text hover:bg-primary hover:border-primary"
                >
                  View My Resume
                </Button>
            </Link>
              <Link href="https://www.linkedin.com/in/kaniskamitra/" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-text hover:text-black hover:bg-accent"
                >
                  <Linkedin className="h-5 w-5" />
                  LinkedIn
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 mt-16">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-secondary">
              100+
            </h2>
            <p className="text-lg mt-2">
              Leetcode <br />
              problems solved
            </p>
          </div>

          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-secondary">
              2x
            </h2>
            <p className="text-lg mt-2">
              Hackathon <br />
              finalist
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
