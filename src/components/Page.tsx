import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Clock, Filter, GitFork, Heart, MessageSquare, Search, Star, X } from 'lucide-react'
// import Image from "next/image"

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[300px_1fr_300px] gap-6">
          {/* Left Sidebar */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold">Top repositories</h2>
              <Button variant="default" size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                New
              </Button>
            </div>
            <Input 
              placeholder="Find a repository..." 
              className="bg-transparent border-gray-800"
            />
            <ScrollArea className="h-[400px]">
              <div className="space-y-2">
                {Array.from({length: 8}).map((_, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 hover:bg-gray-900 rounded-md cursor-pointer">
                    <div className="w-4 h-4 rounded-full bg-gray-600" />
                    <span className="text-sm text-gray-300">username/repository-{i + 1}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Main Content */}
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
              <Input 
                placeholder="Ask Copilot" 
                className="pl-10 bg-transparent border-gray-800"
              />
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-gray-800">
                <Clock className="w-4 h-4 mr-2 text-gray-950" />
                <p className="text-gray-950">Latest nodejs/node release</p>
              </Button>
              <Button variant="outline" className="border-gray-800">
                <Star className="w-4 h-4 mr-2 text-gray-950" />
                <p className="text-gray-950">Create a profile README for me</p>
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold">Home</h1>
              <Button variant="outline" size="sm" className="border-gray-800">
                <Filter className="w-4 h-4 mr-2 text-gray-950" />
                <p className="text-gray-950">Filter</p>
              </Button>
            </div>

            <Card className="bg-[#0d1117] border-gray-800">
              <div className="p-4 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-emerald-600 rounded-lg" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">AlistGo/alist</span>
                        <span className="text-gray-500">released</span>
                      </div>
                      <span className="text-sm text-gray-500">4 days ago</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <X className="w-4 h-4" />
                  </Button>
                </div>

                <h2 className="text-xl font-semibold">v3.41.0</h2>

                <div className="space-y-2">
                  <h3 className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-pink-500" />
                    Features
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Ftp server support (#7634 close #1898)</li>
                    <li>• Sftp server support</li>
                    <li>• Support multipart upload</li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <div className="flex flex-wrap gap-4">
                    <div className="flex -space-x-2">
                      {Array.from({length: 6}).map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-[#0d1117]" />
                      ))}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4" /> 8
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-4 h-4" /> 3
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4" /> 1
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-4 h-4" /> 1
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4">
            <Card className="bg-[#1a1b4b] border-none text-white p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-white rounded-full" />
                  <span className="font-semibold">GitHub Copilot</span>
                </div>
                <Button variant="ghost" size="sm" className="text-white">
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <h3 className="mt-4 font-semibold">Extensions are here!</h3>
              <p className="mt-2 text-sm">
                Extend GitHub Copilot with ready-to-use extensions or build your own using our developer platform with APIs, documentation, and guides.
              </p>
              <Button className="mt-4 w-full bg-white text-black hover:bg-gray-200">
                Learn more
              </Button>
            </Card>

            <Card className="bg-[#0d1117] border-gray-800 p-4">
              <h3 className="font-semibold mb-4">Latest changes</h3>
              <div className="space-y-6">
                {[
                  "Replacement of announcement banner GraphQL fields",
                  "Mistral Large 24.11 is now available on GitHub Models (GA)",
                  "Llama 3.3 70B Instruct is now available on GitHub Models (GA)",
                ].map((change, i) => (
                  <div key={i} className="relative pl-6 border-l border-gray-800">
                    <div className="absolute left-0 top-1.5 w-2.5 h-2.5 -translate-x-[5px] rounded-full bg-gray-600" />
                    <div className="text-xs text-gray-500 mb-1">3 days ago</div>
                    <div className="text-sm">{change}</div>
                  </div>
                ))}
                <Button variant="link" className="text-sm text-blue-500">
                  View changelog →
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
