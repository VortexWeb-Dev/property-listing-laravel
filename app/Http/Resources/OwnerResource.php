<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class OwnerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'created_at' => (new Carbon($this->created_at))->format('Y-m-d'),
            'updated_at' => (new Carbon($this->updated_at))->format('Y-m-d'),
            'bitrix_id' => $this->bitrix_id,
            'name' => $this->name,
            'email' => $this->email,
            'phone' => $this->phone,
            'image_url' => $this->image_url,
            'designation' => $this->designation,
            'role' => $this->role
        ];
    }
}
