<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\FeedBack;

class FeedBackController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $feedback = FeedBack::orderBy('id','desc')->get();
        return response()->json($feedback);
    }

  

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $fb = new FeedBack;
        $fb->name = $request->name;
        $fb->email = $request->email;
        $fb->sdt = $request->sdt;
        $fb->content = $request->content;
        $fb->save();
        return response()->json($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $fb = FeedBack::findOrFail($id);
        return response()->json($fb);
    }

   

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $fb = FeedBack::findOrFail($id);
        $fb->name = $request->name;
        $fb->email = $request->email;
        $fb->sdt = $request->sdt;
        $fb->content = $request->content;
        $fb->save();
        return response()->json($request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $fb = FeedBack::findOrFail($id);
        $fb->delete();
        return response()->json($fb);
    }
}
