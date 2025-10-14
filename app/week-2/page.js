import React from "react";
import Link from "next/link";
import StudentInfo from "./student-info";


export default function Home(){
    return (
        <div>
            <h1>CPRG306: Web Development 2 -Assignments</h1>
            <Link href={"/week-2"}>Go to week-2 Page</Link>
            <Link href={"/Week-3"}>Go to week-3 page</Link>
        </div>
    )
}