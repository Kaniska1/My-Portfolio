import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { Github, Leetcode } from "lucide-react"

export default function CodingProfiles() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="section-title text-accent">MY CODING PROFILES</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="profile-card">
          <div className="h-48 flex items-center justify-center bg-background border-b border-text">
            <div className="text-center">
              <img
                  src="../GitHub.png"
                  alt="My Image"
                  className="max-w-full max-h-64 object-contain"
                />
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">My GitHub Profile</h3>
            <p className="mb-4">See my projects and repositories</p>
            <Link href="https://github.com/Kaniska1" rel="noopener noreferrer">
              <Button variant="outline" className="border-text text-text hover:text-background hover:bg-text">
                Visit Profile
              </Button>
            </Link>
          </div>
        </div>

        <div className="profile-card">
          <div className="h-48 flex items-center justify-center bg-background border-b border-text">
            <div className="text-center">
              <img
                  src="../Leetcode.png"
                  alt="My Image"
                  className="max-w-full max-h-96 object-contain"
                />
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">My LeetCode Profile</h3>
            <p className="mb-4">See my prowess on problem solving</p>
            <Link href="https://leetcode.com/u/Kaniska1/" rel="noopener noreferrer">
              <Button variant="outline" className="border-text text-text hover:text-background hover:bg-text">
                Visit Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
