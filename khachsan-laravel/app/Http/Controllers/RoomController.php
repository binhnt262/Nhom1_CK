<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Room;

class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $rooms = Room::orderBy('id','desc')->get();
        return response()->json($rooms);
    }

   
    

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $room = new Room;
        if($request->hasfile('image')){
            $file = $request->file('image');
            $extension = $file->getClientOriginalExtension();//getting image
            $filename = time().'.'. $extension;
            $file->move('upload/rooms/', $filename);
            $room->image = $filename;
        }
        else{
            return $request;
            $room->image ='';
        }
        $room->ten_phong = $request->ten_phong;
        $room->gia_phong = $request->gia_phong;
        $room->save();
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
