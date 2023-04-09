'use client';

import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import useRentModal from '@/app/hooks/useRentModal';

import Modal from './Modal';
import Counter from '../inputs/Counter';
import CategoryInput from '../inputs/CategoryInput';



const RentModal = () => {
  return (
    <div>
      
    </div>
  )
}

export default RentModal
