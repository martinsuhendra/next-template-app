import Link from 'next/link'

function Comments() {
  const status = 'authenticated'

  return (
    <div className="my-12">
      <h4 className="text-2xl font-semibold">Comments</h4>
      {status === 'authenticated' ? (
        <div className="mt-4 flex flex-col sm:flex-row gap-5 items-end sm:items-center justify-between">
          <textarea
            name=""
            className="flex-1 textarea textarea-bordered textarea-lg w-full"
            placeholder="write a comment..."
            id=""
          />
          <button type="submit" className="btn btn-sm sm:btn-md btn-error">
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
    </div>
  )
}

export default Comments
