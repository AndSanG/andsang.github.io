'use server'

export async function subscribe(prevState: any, formData: FormData) {
  const email = formData.get('email')
  
  // Simulate network delay using the Vercel best practice of "await" (but here we are server side)
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  console.log(`Subscribed: ${email}`)
  
  // Return simple state
  return { 
    message: `Subscribed successfully with ${email}!`,
    timestamp: new Date().toISOString()
  }
}
