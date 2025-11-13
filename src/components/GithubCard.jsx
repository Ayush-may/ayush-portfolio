import React, { useEffect, useState } from 'react'
import { FaCodeBranch, FaGithub, FaStar } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const GithubCard = () => {
    const [data, setData] = useState(null)
    const [stars, setStars] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userRes = await fetch("https://api.github.com/users/ayush-may")
                const user = await userRes.json()

                const repoRes = await fetch("https://api.github.com/users/ayush-may/repos")
                const repos = await repoRes.json()

                // Total stars across all repos
                const totalStars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)

                setData(user)
                setStars(totalStars)
                setLoading(false)
            } catch (error) {
                console.error("GitHub fetch failed:", error)
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    if (loading) return <p className="text-white">Loading...</p>

    return (
        <div className='my-4 break-inside-avoid bg-gray-800 text-white p-4 rounded-xl flex flex-col items-center gap-3'>
            <FaGithub size={20} className='self-start' />

            <div className='rounded-full overflow-hidden w-[100px] h-[100px] -mt-5'>
                <img src={data.avatar_url} className='w-full h-full' alt="avatar" />
            </div>

            <p className='text-sm text-gray-100'>@{data.login}</p>

            <div className='flex items-center gap-2'>
                {/* Public Repos */}
                <div className='flex items-center gap-1 p-2 px-3 bg-gray-700 rounded-lg'>
                    <FaCodeBranch size={20} />
                    <span>{data.public_repos}</span>
                </div>

                {/* Followers */}
                <div className='flex items-center gap-1 p-2 px-3 bg-gray-700 rounded-lg'>
                    <FaUserGroup size={20} />
                    <span>{data.followers}</span>
                </div>

                {/* Stars Total */}
                <div className='flex items-center gap-1 p-2 px-3 bg-gray-700 rounded-lg'>
                    <FaStar size={20} />
                    <span>{stars}</span>
                </div>
            </div>
        </div>
    )
}

export default GithubCard
